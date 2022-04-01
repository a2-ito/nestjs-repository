# nestjs-repository

This is a sample code to understand the "Repository" pattern on NestJS.
You could add the "database" layer by adding a "database" directory in the "repository" directory.

```
src/
├── app.controller.spec.ts
├── app.controller.ts
├── app.module.ts
├── app.service.ts
├── main.ts
└── repository
    └── in-memory
        ├── exception.ts
        ├── i-task.repository.ts
        ├── module.ts
        ├── repository-providers.ts
        ├── task-name.ts
        ├── task.repository.ts
        └── task.ts

2 directories, 12 files
```

## how to run
```
nest start
```
