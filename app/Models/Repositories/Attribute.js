class Attribute {

    static async findAllAttributes() {
        const result = await this.all();
        return result;
    }

    static async findByAttributesId(id) {
        const  result = await this.findOrFail(id)
        return result;
    }

    static async updateByAttributesId(params) {
        const {id, update_id} = params

        const  result = await this.findOrFail(id)
        result.merge({name:update_id})
        result.save()

        return result
    }

    static async createByAttributesId(params){
        const  result = await this.create(params)
        return result
    }

    static async deleteByAttributesId(id,response){
        const result = await this.findOrFail(id);
        await result.delete();

        return response.json({msg: 'Ok'});
    }

}


module.exports = Attribute;