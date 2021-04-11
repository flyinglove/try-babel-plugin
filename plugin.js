export default function({types: t}) {
    return {
        name: 'arrow-to-func',
        visitor: {
            ArrowFunctionExpression(path) {
                path.arrowFunctionToExpression();
            }
        }
    }
}