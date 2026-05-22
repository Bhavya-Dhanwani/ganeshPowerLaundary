# Ganesh Power Laundary Frontend

Frontend-only Next.js app for Ganesh Power Laundary. The public side is a landing page for customers, and the owner side is a protected dashboard for managing laundry orders.

## Tech Stack

- Next.js 16 App Router
- React 19
- CSS Modules
- Frontend-only local order storage for now
- Password-protected owner dashboard

## Run Locally

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

Build check:

```bash
npm run lint
npm run build
```

## Frontend Routes

| Route | Access | Purpose |
|---|---|---|
| `/` | Public | Customer landing page with services, process, pricing, and contact sections. |
| `/login` | Public | Owner password login page. Current prototype password is `ganeshpower`. |
| `/dashboard` | Protected | Owner dashboard for viewing orders, adding customers/orders, updating status, and removing orders. |
| `/robots.txt` | Public | SEO robots rules. Dashboard and login are disallowed. |
| `/sitemap.xml` | Public | Sitemap for the public landing page. |

## Current Frontend Behavior

- Dashboard protection uses a session cookie named `ganesh-owner-session`.
- Login currently uses a Server Action in `src/app/login/actions.js`.
- Orders are currently stored in browser `localStorage` through `src/infrastructure/orderStorage.js`.
- The dashboard currently supports:
  - Add customer order
  - Search orders
  - Filter by status
  - Update status: `Pending`, `In Process`, `Completed`
  - Remove order
  - Revenue/order summary cards

## 4 Layer Frontend Architecture

| Layer | Folder | Responsibility |
|---|---|---|
| Domain | `src/domain` | Static business data, service list, order statuses, initial mock orders. |
| Application | `src/application` | Auth rules and order helpers. |
| Infrastructure | `src/infrastructure` | Browser storage and session helpers. |
| Presentation | `src/presentation` | UI components and CSS Modules. |

## Backend Needed

The backend will be separate. Replace frontend `localStorage` order handling with API calls once these endpoints exist.

Base URL should be configurable from the frontend with an environment variable:

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:5000
```

## Required API Routes

### 1. Create Order

```http
POST /api/order/createorder
```

Creates a new laundry order/customer entry from the owner dashboard.

Request body:

```json
{
  "customer": "Ramesh Kumar",
  "phone": "98765 43210",
  "service": "Wash and Fold",
  "items": 14,
  "amount": 520,
  "due": "Today, 7:00 PM",
  "status": "Pending"
}
```

Expected success response:

```json
{
  "success": true,
  "order": {
    "id": "GPL-1048",
    "customer": "Ramesh Kumar",
    "phone": "98765 43210",
    "service": "Wash and Fold",
    "items": 14,
    "amount": 520,
    "due": "Today, 7:00 PM",
    "status": "Pending",
    "createdAt": "2026-05-22T12:00:00.000Z",
    "updatedAt": "2026-05-22T12:00:00.000Z"
  }
}
```

Validation needed:

- `customer` is required.
- `phone` is required.
- `service` must be one of: `Wash and Fold`, `Steam Iron`, `Dry Clean`.
- `items` must be a positive number.
- `amount` must be zero or greater.
- `status` must be one of: `Pending`, `In Process`, `Completed`.

### 2. Get Orders

```http
GET /api/order/getorder
```

Returns all orders for the owner dashboard.

Expected success response:

```json
{
  "success": true,
  "orders": [
    {
      "id": "GPL-1048",
      "customer": "Ramesh Kumar",
      "phone": "98765 43210",
      "service": "Wash and Fold",
      "items": 14,
      "amount": 520,
      "due": "Today, 7:00 PM",
      "status": "Pending",
      "createdAt": "2026-05-22T12:00:00.000Z",
      "updatedAt": "2026-05-22T12:00:00.000Z"
    }
  ]
}
```

Recommended query params:

```http
GET /api/order/getorder?status=Pending&search=Ramesh
```

Optional filters:

- `status`: `Pending`, `In Process`, `Completed`
- `search`: match customer name, phone, or order id

## Additional Backend Routes Recommended

These are not currently listed as existing routes, but the dashboard will eventually need them.

### Update Order Status

```http
PATCH /api/order/updateorder/:id
```

Request body:

```json
{
  "status": "Completed"
}
```

### Delete Order

```http
DELETE /api/order/deleteorder/:id
```

Deletes an order from the dashboard.

### Owner Login

```http
POST /api/auth/login
```

Recommended when replacing the prototype password with real backend auth.

Request body:

```json
{
  "password": "owner-password"
}
```

Expected response:

```json
{
  "success": true,
  "token": "jwt-or-session-token"
}
```

## Order Model

Backend order fields should match the frontend dashboard shape:

```json
{
  "id": "GPL-1048",
  "customer": "Ramesh Kumar",
  "phone": "98765 43210",
  "service": "Wash and Fold",
  "items": 14,
  "amount": 520,
  "due": "Today, 7:00 PM",
  "status": "Pending",
  "createdAt": "2026-05-22T12:00:00.000Z",
  "updatedAt": "2026-05-22T12:00:00.000Z"
}
```

Allowed statuses:

```text
Pending
In Process
Completed
```

Allowed services:

```text
Wash and Fold
Steam Iron
Dry Clean
```

## Frontend Integration Notes

When backend is ready:

1. Replace `loadOrders` and `saveOrders` in `src/infrastructure/orderStorage.js` with API calls.
2. Use `GET /api/order/getorder` when the dashboard loads.
3. Use `POST /api/order/createorder` when submitting the new order form.
4. Add update/delete API calls for status changes and removing orders.
5. Move owner auth from prototype password to backend session/JWT auth.
