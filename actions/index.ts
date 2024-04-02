"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";



export const getCategory = () => {}

export const getCategories = () => {}

// ------------- Banner Actions --------------------------------




// export async function getServerSideProps(context) {
//   const { req } = context;
//   const session = await getSession(req);

//   if (session) {
//     return {
//       redirect: {
//         destination: "/",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {
//       session,
//     },
//   };
// }


