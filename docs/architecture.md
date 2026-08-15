# SentinelWatch architecture

Browser → React/Nginx → REST API Gateway → independent services.

- Frontend: browser-facing React application.
- Gateway: one API entry point for the frontend.
- Auth: isolated login responsibility.
- Monitoring: device inventory and alert data.
- Reports: report metadata and Azure Blob Storage integration.
- Azure Function: serverless security-event classification.
- Docker: packages each service.
- Kubernetes/AKS: runs and exposes the containers.

The sample events are deliberately simple and fictional. The project demonstrates the requested cloud architecture without claiming to be a production SIEM.
