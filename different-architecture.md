# Architectural Types

## Monolithic Architecture

- **Characteristics:**
  - **Single Codebase:** Entire application is developed and deployed as a single unit.
  - **Tight Integration:** Components are closely interconnected, sharing the same memory space and resources.
  - **Scalability Challenges:** Scaling involves replicating the entire application, which may lead to resource inefficiencies.

## Microservices Architecture

- **Characteristics:**
  - **Decomposed Services:** Application is broken down into small, independent services, each with its specific functionality.
  - **Database Independence:** Each service has its own database, promoting autonomy.
  - **Scalability and Flexibility:** Enables scaling and updating individual services independently, fostering agility.

## Serverless Architecture

- **Characteristics:**
  - **Function as a Service (FaaS):** Architectural paradigm where functions are executed in response to events without the need to manage servers.
  - **Server Management Abstraction:** Developers focus on writing code without dealing with server provisioning or maintenance.
  - **Cost Efficiency:** Billed based on actual usage, reducing costs during idle periods.

## Event-Driven Architecture

- **Characteristics:**
  - **Event-Centric Communication:** Components communicate through events, promoting loose coupling.
  - **Asynchronous Processing:** Well-suited for handling tasks that can be processed independently and asynchronously.
  - **Flexibility:** Enables easy integration of new components and services through event-based interactions.

## Microkernel Architecture

- **Characteristics:**
  - **Minimal Core:** Core system includes only essential functions.
  - **Modular Expansion:** Additional features added as separate modules, extending functionality.
  - **Enhanced Flexibility:** Allows customization and adaptation by adding or removing modules.

## Layered Architecture

- **Characteristics:**
  - **Hierarchical Structure:** Application is structured in distinct layers, each serving a specific purpose.
  - **Modularity:** Each layer has well-defined responsibilities, promoting modularity and ease of maintenance.
  - **Scalability:** Supports scalability by adding more instances of specific layers as needed.

## Component-Based Architecture

- **Characteristics:**
  - **Reusable Components:** Software is divided into reusable, self-contained components.
  - **Modular Development:** Promotes modular development, where components can be developed, tested, and upgraded independently.
  - **Interchangeability:** Components can be replaced with minimal impact on the overall system.

## Decentralized Architecture

- **Characteristics:**
  - **No Single Control Point:** Absence of a central control point, allowing components to operate independently.
  - **Autonomous Components:** Components operate autonomously, enhancing fault tolerance.
  - **Resilience:** Improved resilience as the failure of one component does not necessarily impact the entire system.
