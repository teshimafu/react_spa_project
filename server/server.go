package main

import (
	"log"
	"net/http"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
)

func public(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("hello public!\n"))
}

func private(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("hello private!\n"))
}

//Start server
func Start() {
	allowedOrigins := handlers.AllowedOrigins([]string{"http://localhost:3000"})
	allowedMethods := handlers.AllowedMethods([]string{"GET", "POST", "DELETE", "PUT"})
	allowedHeaders := handlers.AllowedHeaders([]string{"Authorization"})

	r := mux.NewRouter()
	// 静的ファイルの提供
	// $PROROOT/assets/about.html が http://localhost:8080/assets/about.html でアクセスできる
	r.Handle("/", http.FileServer(http.Dir("./build")))
	r.PathPrefix("/build/").Handler(http.StripPrefix("/build/", http.FileServer(http.Dir("./build"))))
	r.PathPrefix("/static/").Handler(http.StripPrefix("/static/", http.FileServer(http.Dir("./build/static"))))

	r.HandleFunc("/api/public", public)
	r.HandleFunc("/api/private", private)

	log.Fatal(http.ListenAndServe(":8000", handlers.CORS(allowedOrigins, allowedMethods, allowedHeaders)(r)))

}
