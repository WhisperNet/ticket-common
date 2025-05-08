# tckt-common Module Documentation

The `tckt-common` module is a shared library that provides essential utilities and functionality for all microservices in the `ticketing-microservice-app` project. This documentation explains how to use the module effectively.

---

## Installation

To include the `tckt-common` module in your microservice, install it via npm:

```bash
npm install @whispernet-sust/ticket-common
```

---

## Features Overview

### 1. Error Handling

- **Purpose**: Standardized error classes and middleware for consistent error responses.
- **Usage**:

  ```typescript
  import { CustomError, errorHandler } from '@whispernet-sust/ticket-common';

  // Example: Custom Error
  class NotFoundError extends CustomError {
    statusCode = 404;

    constructor() {
      super('Resource not found');
    }

    serializeErrors() {
      return [{ message: 'Resource not found' }];
    }
  }

  // Middleware usage
  app.use(errorHandler);
  ```

### 2. Event Management

- **Purpose**: Simplifies event publishing and listening using a common event bus.
- **Usage**:

  ```typescript
  import {
    BasePublisher,
    BaseListener,
    Subjects,
  } from '@whispernet-sust/ticket-common';

  // Example: Event Publisher
  class TicketCreatedPublisher extends BasePublisher<TicketCreatedEvent> {
    subject: Subjects.TicketCreated = Subjects.TicketCreated;
  }

  // Example: Event Listener
  class TicketCreatedListener extends BaseListener<TicketCreatedEvent> {
    subject: Subjects.TicketCreated = Subjects.TicketCreated;
    queueGroupName = 'service-queue-group';

    onMessage(data: TicketCreatedEvent['data'], msg: Message) {
      console.log('Event data:', data);
      msg.ack();
    }
  }
  ```

### 3. Custom Middleware

- **Purpose**: Predefined middleware for common tasks like authentication and request validation.
- **Usage**:

  ```typescript
  import { validateRequest, requireAuth } from '@whispernet-sust/ticket-common';

  // Example: Validation Middleware
  app.post('/api/tickets', validateRequest, (req, res) => {
    res.send({});
  });

  // Example: Authentication Middleware
  app.get('/api/tickets', requireAuth, (req, res) => {
    res.send({});
  });
  ```

### 4. Common Types

- **Purpose**: Shared TypeScript types and interfaces for consistent data structures.
- **Usage**:

  ```typescript
  import { TicketCreatedEvent } from '@whispernet-sust/ticket-common';

  const event: TicketCreatedEvent = {
    id: '123',
    title: 'Concert',
    price: 100,
  };
  ```

---

## Best Practices

1. **Centralized Updates**: Always use the latest version of `tckt-common` to ensure consistency across microservices.
2. **Custom Extensions**: Extend the provided classes or interfaces to suit your specific microservice needs.
3. **Error Handling**: Use the provided error classes and middleware to maintain uniform error responses.

---
