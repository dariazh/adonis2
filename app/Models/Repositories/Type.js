class Type {

    static async findAllTypes() {
        const result = await this.all();
        return result;
    }

    static async findByTypesId(id) {
        const  result = await this.findByOrFail('name',id)
        return result;
    }

    static async updateByTypesId(params) {
        const {id, update_id} = params

        const  result = await this.findByOrFail('name',id)
        result.merge({name:update_id})
        result.save()

        return result
    }

    static async createByTypesId(params){
        const {id} = params
        const  result = await this.findOrCreate({name: id})
        return result
    }

    static async deleteByTypesId(id,response){
        const result = await this.findByOrFail({name: id});
        await result.delete();

        return response.json({msg: 'Ok'});
    }

}


module.exports = Type;