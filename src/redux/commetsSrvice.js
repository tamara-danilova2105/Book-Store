import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

export const commentsApi = createApi({
    reducerPath: 'commensApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
    tagTypes: ['Posts'],
    endpoints: (build) => ({
        fetchAllComments: build.query({
            query: () => ({
                url: '/comments'
            }),
            providesTags: (result) => ['Posts']
        }),

        addComment: build.mutation({
            query: (comment) => ({
                url: '/comments',
                method: 'POST',
                body: comment
            }),
            invalidatesTags: ['Posts']
        }),

        updateComment: build.mutation({
            query: (comment) => ({
                url: `/comments/${comment.id}`,
                method: 'PUT',
                body: comment
            }),
            invalidatesTags: ['Posts']
        }),

        deleteComment: build.mutation({
            query: (comment) => ({
                url: `/comments/${comment.id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Posts']
        }),
    }),
})

export const { 
    useFetchAllCommentsQuery, 
    useAddCommentMutation,
    useUpdateCommentMutation,
    useDeleteCommentMutation
} = commentsApi