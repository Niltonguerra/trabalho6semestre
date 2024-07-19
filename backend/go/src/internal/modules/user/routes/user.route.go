package routes_user

import (
	"github.com/gin-gonic/gin"
	"go-project/internal/modules/user/controllers"
)

// SetUserRoutes define as rotas relacionadas aos usuários
func SetUserRoutes(r *gin.Engine) {
	userGroup := r.Group("/users")
	{
		userGroup.GET("/", handlers.GetUsers)
		userGroup.GET("/:id", handlers.GetUserByID)
		userGroup.POST("/", handlers.CreateUser)
		userGroup.PUT("/:id", handlers.UpdateUser)
		userGroup.DELETE("/:id", handlers.DeleteUser)
	}
}
