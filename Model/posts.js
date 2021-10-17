module.exports = {
    posts : [
        {
            id: "sdg56sh",
            title: "Titulo do Post",
            description: "Descrição do Post"
        }
    ],

    getAll(){
        return this.posts;
    },
    
    newPost(title, description){
        this.posts.push({id:generateId(), title, description});
    }


}



/* --> Função para Gerar ID <-- */
function generateId(){
    return Math.random().toString(36).substr(2, 9);
}