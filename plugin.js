export default function ({ types: t }) {
    return {
        name: "func-state-replace",
        visitor: {
            BinaryExpression(path) {
                const node = path.node;
                path.replaceWith(
                    t.binaryExpression("**", node.left, t.numericLiteral(2))
                );
                path.skip();
            },
        },
    };
}
