module.exports = class TesteModel {
    constructor(teste){
        this.title = teste.title;
        this.author = teste.author;
        this.body = teste.body;
        this.comments = teste.comments;
        this.date = teste.date;
        this.hidden = teste.hidden;
        this.meta = {
            votes: teste.meta.votes,
            favs: teste.meta.favs
        }
        
    }
}