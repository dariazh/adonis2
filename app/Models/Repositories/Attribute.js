class Attribute {

    static async updateById(id, params) {
        const  result = await this.findOrFail(id)
        result.merge(params)
        await result.save()

        return result
    }

    static async createNew(params){
        const  result = await this.create(params)
        return result
    }

    static async deleteById(id){
        const result = await this.findOrFail(id);
        await result.delete();

        return result
    }

}


module.exports = Attribute;