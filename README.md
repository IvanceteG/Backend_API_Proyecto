# Backend_API_Proyecto

# Estructura del proyecto:

/backend
│
├── src
│   ├── config               // Contiene toda la información
│   │   ├── cors.js
│   │   ├── db.js
│   │   └── email.js
│   │
│   ├── models               // Todos los modelos necesarios
│   │   ├── Producte.js
│   │   ├── Usuari.js
│   │   └── Pedido.js
│   │
│   ├── middleware
│   │   ├── auth.js          // Verifica JWT
│   │   ├── admin.js         // Verifica rol admin
│   │   └── upload.js        // Multer para fotos de registro
│   │
│   ├── controllers         // Los controladores con la lógica para los endpoints
│   │   ├── auth.controller.js
│   │   ├── productes.controller.js
│   │   ├── pedidos.controller.js
│   │   └── usuaris.controller.js
│   │
│   ├── routes              //Todas las rutas
│   │   ├── auth.routes.js
│   │   ├── productes.routes.js
│   │   ├── pedidos.routes.js
│   │   └── usuaris.routes.js
│   │
│   ├── services
│   │   ├── email.service.js
│   │   └── pedidos.service.js
│   │
│   ├── errors
│   │   └── errorHandler.js
│   │
│   └── app.js
│
├── uploads/                // Fotos de usuarios
├── .env
├── package.json
└── server.js