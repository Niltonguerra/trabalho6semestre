package handlers

import (
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
	"go-project/internal/modules/user/models"
)

// Exemplo de dados de usuários (simulando um banco de dados)
var users = []models.User{
	{ID: 1, Name: "John Doe", Email: "john.doe@example.com", Password: "password"},
	{ID: 2, Name: "Jane Smith", Email: "jane.smith@example.com", Password: "password"},
}

// GetUsers retorna todos os usuários
func GetUsers(c *gin.Context) {
	c.JSON(http.StatusOK, users)
}

// GetUserByID retorna um usuário pelo ID
func GetUserByID(c *gin.Context) {
	idStr := c.Param("id")
	id, err := strconv.ParseUint(idStr, 10, 64)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "ID inválido"})
		return
	}

	// Lógica para encontrar o usuário pelo ID
	for _, user := range users {
		if user.ID == uint(id) {
			c.JSON(http.StatusOK, user)
			return
		}
	}

	c.JSON(http.StatusNotFound, gin.H{"error": "Usuário não encontrado"})
}

// CreateUser cria um novo usuário
func CreateUser(c *gin.Context) {
	var newUser models.User

	if err := c.ShouldBindJSON(&newUser); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Lógica para adicionar o novo usuário
	newUser.ID = uint(len(users) + 1)
	users = append(users, newUser)

	c.JSON(http.StatusCreated, newUser)
}

// UpdateUser atualiza um usuário existente pelo ID
func UpdateUser(c *gin.Context) {
	idStr := c.Param("id")
	id, err := strconv.ParseUint(idStr, 10, 64)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "ID inválido"})
		return
	}

	var updatedUser models.User

	if err := c.ShouldBindJSON(&updatedUser); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Lógica para atualizar o usuário pelo ID
	for index, user := range users {
		if user.ID == uint(id) {
			users[index] = updatedUser
			c.JSON(http.StatusOK, updatedUser)
			return
		}
	}

	c.JSON(http.StatusNotFound, gin.H{"error": "Usuário não encontrado"})
}

// DeleteUser deleta um usuário pelo ID
func DeleteUser(c *gin.Context) {
	idStr := c.Param("id")
	id, err := strconv.ParseUint(idStr, 10, 64)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "ID inválido"})
		return
	}

	// Lógica para deletar o usuário pelo ID
	for index, user := range users {
		if user.ID == uint(id) {
			users = append(users[:index], users[index+1:]...)
			c.JSON(http.StatusOK, gin.H{"message": "Usuário deletado com sucesso"})
			return
		}
	}

	c.JSON(http.StatusNotFound, gin.H{"error": "Usuário não encontrado"})
}
