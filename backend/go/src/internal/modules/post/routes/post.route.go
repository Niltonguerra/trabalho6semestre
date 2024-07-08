package routes_post

import (
	"github.com/gin-gonic/gin"
	"go-project/internal/modules/post/controllers"
)

// SetPostRoutes define as rotas relacionadas aos usuários
func SetPostRoutes(r *gin.Engine) {
	postGroup := r.Group("/posts")
	{
		postGroup.GET("/", handlers.GetPosts)
		postGroup.GET("/:id", handlers.GetPostByID)
		postGroup.POST("/", handlers.CreatePost)
		postGroup.PUT("/:id", handlers.UpdatePost)
		postGroup.DELETE("/:id", handlers.DeletePost)
	}
}
