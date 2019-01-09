
class Type {
    static  async findAll(){
        //const {rows: result } = await this.query().fetch();
        const {rows: result } = await this.all();
        return result;
    }

    static  async create(name){
        const type = new this()
        type.name = name
        await type.save()
    }

    static async findByName(name) {
        const {rows: result } = await this.query().where({name: name}).fetch();
        return result;
    }

    static async updateByName(name){
        await this.query().where('name', name).update({ name: 'iPhone' })

    }

    static async deleteByName(name) {
        const result = await this.query().where({name: name}).delete()
        return result;
    }
}


module.exports = Type;