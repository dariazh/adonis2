const Role = use('Role')
const User = use('User')

class RolesController {
    async createRole ({ request }) {
        //const { name, slug, description } = request.post()
        const role = new Role()
        role.name = 'Administrator'
        role.slug = 'administrator'
        role.description = description
        await role.save()
        return role.toJSON()
    }

    async attachRole ({ request }) {
       // const { userId, roleId } = request.post()
        const user = await User.find(userId)
        await user.roles().attach([ roleId ])
        return { result: 'ok' }
    }
}

module.exports = RolesController;

