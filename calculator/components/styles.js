import { StyleSheet } from 'react-native';

var Style = StyleSheet.create({
    rootContainer: {
        flex: 1
    },

    displayContainer: {
        flex: 3,
        backgroundColor: 'white',
        justifyContent: 'center'
    },

    displayText: {
        color: 'black',
        fontSize: 38,
        fontWeight: 'bold',
        textAlign: 'right',
        padding: 20
    },

    inputContainer: {
        flex: 7,
        backgroundColor: 'black'
    },

    inputButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#91AA9D',
        borderRadius: 50,
        backgroundColor: 'white'
    },

    inputButtonHighlighted: {
        backgroundColor: '#193441'
    },

    inputButtonText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black'
    },

    inputRow: {
        flex: 1,
        flexDirection: 'row'
    }
});

export default Style;
