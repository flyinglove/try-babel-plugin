export default function({babel: t}) {
    return {
        name: 'let-to-var',
        visitor: {
            VariableDeclaration(path) {
                path.node.kind = 'var'
            }
        }
    }
}