// package main

// import (
//     "encoding/json"
//     "fmt"
//     "log"
//     "net/http"
//     "strconv"
//     "sync"
// )

// // User representa um usuário na API
// type User struct {
//     ID   int    `json:"id"`
//     Name string `json:"name"`
//     Age  int    `json:"age"`
// }

// var (
//     users   []User
//     nextID  = 1
//     usersMu sync.Mutex
// )

// func main() {
//     // Rotas da API
//     http.HandleFunc("/users", getUsersHandler)
//     http.HandleFunc("/users/add", addUserHandler)
//     http.HandleFunc("/users/update", updateUserHandler)
//     http.HandleFunc("/users/delete", deleteUserHandler)

//     // Inicia o servidor na porta 8080
//     fmt.Println("Servidor iniciado em http://localhost:8080")
//     log.Fatal(http.ListenAndServe(":8080", nil))
// }

// // getUsersHandler retorna todos os usuários
// func getUsersHandler(w http.ResponseWriter, r *http.Request) {
//     usersMu.Lock()
//     defer usersMu.Unlock()

//     // Converte para JSON e envia como resposta
//     jsonBytes, err := json.Marshal(users)
//     if err != nil {
//         http.Error(w, err.Error(), http.StatusInternalServerError)
//         return
//     }

//     w.Header().Set("Content-Type", "application/json")
//     w.WriteHeader(http.StatusOK)
//     w.Write(jsonBytes)
// }

// // addUserHandler adiciona um novo usuário
// func addUserHandler(w http.ResponseWriter, r *http.Request) {
//     usersMu.Lock()
//     defer usersMu.Unlock()

//     var user User
//     decoder := json.NewDecoder(r.Body)
//     if err := decoder.Decode(&user); err != nil {
//         http.Error(w, "Erro ao decodificar o corpo da requisição", http.StatusBadRequest)
//         return
//     }

//     user.ID = nextID
//     nextID++
//     users = append(users, user)

//     w.Header().Set("Content-Type", "application/json")
//     w.WriteHeader(http.StatusCreated)
//     json.NewEncoder(w).Encode(user)
// }

// // updateUserHandler atualiza um usuário existente
// func updateUserHandler(w http.ResponseWriter, r *http.Request) {
//     usersMu.Lock()
//     defer usersMu.Unlock()

//     var updatedUser User
//     decoder := json.NewDecoder(r.Body)
//     if err := decoder.Decode(&updatedUser); err != nil {
//         http.Error(w, "Erro ao decodificar o corpo da requisição", http.StatusBadRequest)
//         return
//     }

//     for i, user := range users {
//         if user.ID == updatedUser.ID {
//             users[i] = updatedUser
//             w.WriteHeader(http.StatusNoContent)
//             return
//         }
//     }

//     http.Error(w, "Usuário não encontrado", http.StatusNotFound)
// }

// // deleteUserHandler exclui um usuário existente
// func deleteUserHandler(w http.ResponseWriter, r *http.Request) {
//     usersMu.Lock()
//     defer usersMu.Unlock()

//     idParam := r.URL.Query().Get("id")
//     id, err := strconv.Atoi(idParam)
//     if err != nil {
//         http.Error(w, "ID inválido", http.StatusBadRequest)
//         return
//     }

//     for i, user := range users {
//         if user.ID == id {
//             users = append(users[:i], users[i+1:]...)
//             w.WriteHeader(http.StatusNoContent)
//             return
//         }
//     }

//     http.Error(w, "Usuário não encontrado", http.StatusNotFound)
// }
