package main

import (
    // "net/http"

    "github.com/gin-gonic/gin"
    "go-project/internal/modules/user/routes" 
    "go-project/internal/modules/post/routes"
)

func main() {
    // Cria uma instância do Gin com o modo de release
    r := gin.Default()

    // Configura as rotas dos usuários
    routes_user.SetUserRoutes(r)

    // Configura as rotas dos posts
    routes_post.SetPostRoutes(r)

    // Inicia o servidor Gin na porta 8081
    if err := r.Run(":8081"); err != nil {
        panic(err)
    }
}
