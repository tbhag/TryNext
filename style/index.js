const Styles = {
    default: {
        textColor: 'red',
        fontSize: '20px',
        bgColor: 'pink',
        fontWeight: 'bold',
    },
}
Styles.editor = {
    ...Styles['default'],
    textColor: 'blue',
    fontSize: '16px',
    bgColor: 'orange',
}
Styles.deth = {
    ...Styles['default'],
    textColor: 'red',
    fontSize: '100px',
    bgColor: 'black',
}
export default Styles