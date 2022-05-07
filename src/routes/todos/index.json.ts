import type { RequestHandler } from "@sveltejs/kit";

// TODO: Persist in DB
let todos: Todo[] = [];


export const get: RequestHandler = () =>{
    return {
        status: 200,
        body: todos
    }
}

export async function post({request}:{request:any}) {
    const body = await request.formData(); // or request.json(), etc
    console.log(body.get("text"));
    todos.push({
        created_at: new Date(),
        done: false,
        text: body.get("text")
    });
    return { 
        status: 303,
        headers: {
            location:"/"
        }
     };
    }

// export const post: RequestHandler<{}, FormData> = (request) => {
//     console.log(request.body.get("text"));
//     todos.push(request.body.get("text"));
//     return {
//         // redirect after done status 303
//         status:303,
//         headers:{
//             location:"/"
//         }

//     }
// }