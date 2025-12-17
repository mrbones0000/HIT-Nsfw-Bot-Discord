# NSFW Discord Bot by HIT

Este proyecto es un bot de Discord desarrollado para mostrar contenido NSFW mediante comandos, destinado exclusivamente a servidores y canales marcados como NSFW. El bot está pensado para uso controlado y conforme a las normas de Discord.

---

## Características

* Comandos NSFW por categorías
* Verificación automática de canales NSFW
* Respuestas mediante embeds
* Sistema de comandos slash o prefijo (según implementación)
* Compatible con discord.js
* Preparado para despliegue en Railway

---

## Requisitos

* Node.js 18 o superior
* Una cuenta de Discord
* Un bot creado en el Discord Developer Portal
* Servidor de Discord con canales NSFW habilitados
* Cuenta en Railway (opcional, para hosting)

---

## Creación del bot de Discord

1. Accede a [https://discord.com/developers/applications](https://discord.com/developers/applications)
2. Crea una nueva aplicación
3. Entra en la sección **Bot** y crea el bot
4. Copia el **TOKEN DEL BOT**
5. Activa los siguientes intents si son necesarios:

   * Message Content Intent

---

## Instalación

1. Clona el repositorio:


1. Instala las dependencias:

```bash
npm install
```

---

## Configuración

### Archivo `config.json`

Ejemplo de configuración:

```json
{
  "token": "AQUI_VA_EL_TOKEN_DEL_BOT",
  "prefix": "!",
  "ownerId": "TU_ID_DE_DISCORD"
}
```

### Variables de entorno (recomendado)

Para mayor seguridad, se recomienda usar variables de entorno:

```env
TOKEN=token_del_bot
```

Y en el código:

```js
process.env.TOKEN
```

---

## Uso del bot

### Comandos NSFW

Los comandos solo funcionarán si el canal está marcado como NSFW.

Ejemplo:

```text
!nsfw
```

Si el comando se ejecuta fuera de un canal NSFW, el bot bloqueará la acción automáticamente.

---

## Seguridad y restricciones

* El bot no enviará contenido NSFW en canales normales
* No se permite su uso en servidores con menores de edad
* Se recomienda limitar el acceso a roles específicos
* El bot cumple las restricciones de la API de Discord

---

## Despliegue en Railway

1. Sube el proyecto a GitHub
2. Entra en [https://railway.app](https://railway.app)
3. Crea un nuevo proyecto
4. Selecciona **Deploy from GitHub Repo**
5. Añade la variable de entorno:

   * `TOKEN`

Asegúrate de que el `package.json` incluya:

```json
"scripts": {
  "start": "node index.js"
}
```

---

## Advertencia legal

Este bot está destinado únicamente a contenido NSFW permitido por Discord y solo debe usarse en canales correctamente marcados. El desarrollador no se responsabiliza del mal uso del bot ni de infracciones a los Términos de Servicio de Discord.

---

## Autor

HIT

---

## Licencia

Uso libre bajo responsabilidad del usuario.
