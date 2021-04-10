export default function({babel: t}) {
    return {
        name: 'rename-func-params',
        visitor: {
            FunctionDeclaration(path) {
                Object.keys(path.scope.bindings).forEach(key => {
                    let id = path.scope.generateUid(key)
                    path.scope.rename(key, id)
                })
            }
        }
    }
}