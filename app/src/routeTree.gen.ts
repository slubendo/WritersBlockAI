/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AiImport } from './routes/ai'
import { Route as IndexImport } from './routes/index'
import { Route as SectionSectionImport } from './routes/section.$section'
import { Route as PostPostImport } from './routes/post.$post'

// Create/Update Routes

const AiRoute = AiImport.update({
  path: '/ai',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const SectionSectionRoute = SectionSectionImport.update({
  path: '/section/$section',
  getParentRoute: () => rootRoute,
} as any)

const PostPostRoute = PostPostImport.update({
  path: '/post/$post',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/ai': {
      id: '/ai'
      path: '/ai'
      fullPath: '/ai'
      preLoaderRoute: typeof AiImport
      parentRoute: typeof rootRoute
    }
    '/post/$post': {
      id: '/post/$post'
      path: '/post/$post'
      fullPath: '/post/$post'
      preLoaderRoute: typeof PostPostImport
      parentRoute: typeof rootRoute
    }
    '/section/$section': {
      id: '/section/$section'
      path: '/section/$section'
      fullPath: '/section/$section'
      preLoaderRoute: typeof SectionSectionImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  AiRoute,
  PostPostRoute,
  SectionSectionRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/ai",
        "/post/$post",
        "/section/$section"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/ai": {
      "filePath": "ai.tsx"
    },
    "/post/$post": {
      "filePath": "post.$post.tsx"
    },
    "/section/$section": {
      "filePath": "section.$section.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
