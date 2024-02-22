import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
    publicRoutes: [
        '/',
        '/events/:id',
        '/api/webhooks/clerk',
        '/api/webhooks/clerk',
        '/api/webhooks/stripe',
    ],

    ignoredRoutes: [
    '/api/webhooks/clerk',
    '/api/webhooks/stripe',
    ]
});
 
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
 