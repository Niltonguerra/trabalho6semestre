package handlers

import (
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
	"go-project/internal/modules/post/models"
)

// Exemplo de dados de usuários (simulando um banco de dados)
var posts = []models.Post{
	{ID: 1, Name: "John Doe", Email: "john.doe@example.com", Password: "password"},
	{ID: 2, Name: "Jane Smith", Email: "jane.smith@example.com", Password: "password"},
}

// GetPosts retorna todos os usuários
func GetPosts(c *gin.Context) {
	c.JSON(http.StatusOK, posts)
}

// GetPostByID retorna um usuário pelo ID
func GetPostByID(c *gin.Context) {
	//extrai o parâmetro "id" da URL
	var idStr string
	var id uint64
	var err error

	idStr = c.Param("id")

	//converte o parâmetro "id" para um número inteiro
	id, err = strconv.ParseUint(idStr, 10, 64)
	
	// verifica se é diferente de null, eu acho kkkk, confia no pai, kkkk
	if err != nil {
		// Retorna um erro 400 (Bad Request) se o ID não puder ser convertido para uint64
		c.JSON(http.StatusBadRequest, gin.H{"error": "ID inválido"})
		return
	}

	// Lógica para encontrar o usuário pelo ID
	for _, post := range posts {
		if post.ID == uint(id) {
			c.JSON(http.StatusOK, post)
			return
		}
	}

	c.JSON(http.StatusNotFound, gin.H{"error": "Usuário não encontrado"})
}

// CreatePost cria um novo usuário
func CreatePost(c *gin.Context) {
	// Cria uma variável para armazenar os dados do novo post
	var newPost models.Post

	// Tenta vincular os dados JSON recebidos para a struct newPost
	if err := c.ShouldBindJSON(&newPost); err != nil {
			// Se houver erro na vinculação, retorna um erro 400 Bad Request
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
	}

	// Gera um ID para o novo post baseado no tamanho da slice de posts
	newPost.ID = uint(len(posts) + 1)

	// Adiciona o novo post à lista de posts
	posts = append(posts, newPost)

	// Retorna uma resposta com o novo post criado e status HTTP 201 Created
	c.JSON(http.StatusCreated, newPost)
}


// UpdatePost atualiza um usuário existente pelo ID
func UpdatePost(c *gin.Context) {
	idStr := c.Param("id")

	id, err := strconv.ParseUint(idStr, 10, 64)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "ID inválido"})
		return
	}

	var updatedPost models.Post


	if err := c.ShouldBindJSON(&updatedPost); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Lógica para atualizar o usuário pelo ID
	for index, post := range posts {
		if post.ID == uint(id) {
			posts[index] = updatedPost
			c.JSON(http.StatusOK, updatedPost)
			return
		}
	}

	c.JSON(http.StatusNotFound, gin.H{"error": "Usuário não encontrado"})
}

// DeletePost deleta um usuário pelo ID
func DeletePost(c *gin.Context) {

	// extrai o id da url
	idStr := c.Param("id")

	// converte o id para um número inteiro
	id, err := strconv.ParseUint(idStr, 10, 64)

	// verifica se o id não é um numero inteiro, logo, inválido
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "ID inválido"})
		return
	}

	// Lógica para deletar o usuário pelo ID
	for index, post := range posts {
		if post.ID == uint(id) {
			posts = append(posts[:index], posts[index+1:]...)
			c.JSON(http.StatusOK, gin.H{"message": "Usuário deletado com sucesso"})
			return
		}
	}

	c.JSON(http.StatusNotFound, gin.H{"error": "Usuário não encontrado"})
}
