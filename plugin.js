export default function({types: t}) {
    return {
        name: 'func-state-add',
        visitor: {
            FunctionDeclaration(path) {
                const node = path.node
                path.get('body').unshiftContainer('body', t.binaryExpression('**', t.stringLiteral('1'), t.stringLiteral('2')))
            }
        }
    }
}