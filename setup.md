# Make a folder in app and have a file called route.js in it

### in route.js

```
export async function GET(request) {}

export async function HEAD(request) {}

export async function POST(request) {}

export async function PUT(request) {}

export async function DELETE(request) {}

export async function PATCH(request) {}

// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
export async function OPTIONS(request) {}
```

<br>
<br>
<br>

# check the handlClick fucktion in page.js

### additional to that the below tags are in the file
also add "use client" when using the handleClick fucktion

```
<button onClick={handleClick}>this the button</button>
```
