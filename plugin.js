export default function({types: t}) {
    return {
        name: 'func-state-remove',
        visitor: {
            CallExpression(path) {
                const node = path.node
                if (t.isIdentifier(node.callee.object, {name: 'console'})) {
                    path.remove()
                }
            }
        }
    }
}