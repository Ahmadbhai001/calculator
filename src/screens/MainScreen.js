import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

const MainScreen = () => {
  const [value, setValue] = useState('0')
    const [bracketopen, setBracketOpen] = useState(false)

    const handlePress = (val) => {
        if (val == 'AC') {
            setValue('0')
        }
        else if (val == '=') {
            try {
                if ((value.match(/\(/g) || []).length == (value.match(/\)/g) || []).length) {

                    if (value.slice(-1) == '+' || value.slice(-1) == '-' || value.slice(-1) == '*' || value.slice(-1) == '/') {
                        setValue(`${eval(value.replace('()', '(0)').slice(0, -1))}`)
                    }
                    else {
                        setValue(`${eval(value.replace('()', '(0)') + '*1')}`)
                    }
                }
            }
            catch (e) {
                setValue('wrong value')
            }
        }
        else if (val == 'back') {
            setValue(value.slice(0, -1))
        }
        else if (val == '()') {
            if (value == '0') {
                setValue('(')
                setBracketOpen(true)

            }
            else if (value.slice(-1) == '+' || value.slice(-1) == '-' || value.slice(-1) == '*' || value.slice(-1) == '/') {
                setValue(value + '(')
                setBracketOpen(true)
            }
            else {
                if (bracketopen == true) {
                    setValue(value + ')')
                    setBracketOpen(false)
                }
                else {
                    setValue(value + '(')
                    setBracketOpen(true)
                }
            }
        }
        else {
            if (value == '0') {
                if (val == '+' || val == '-' || val == '*' || val == '/' || val == '.' || val == '%') {
                    setValue(value + val)
                }
                else {
                    setValue(val)
                }
            }
            // console.log(val)
            else if (isNaN(val)) {
                console.log(value.slice(-1))
                if (value.slice(-1) == '+' || value.slice(-1) == '-' || value.slice(-1) == '*' || value.slice(-1) == '/' || value.slice(-1) == '.' || value.slice(-1) == '%') {
                    setValue(value.slice(0, -1) + val)
                }
                else {
                    setValue(value + val)
                }
            }
            else if (!isNaN(val)) {
                setValue(value + val)
            }
        }


    }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.display} ref={ref => { this.scrollView = ref }} onContentSizeChange={() => this.scrollView.scrollToEnd({ animated: true })}>
        <Text style={styles.displayText}>{value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
      </ScrollView>
      {/* KeyPad */}
      <View style={styles.keyPad}>
        {/* Row1 */}
        <View style={styles.keyPadRow}>
          <Pressable onPress={() => handlePress('AC')}>
            <View style={styles.specalOperater}>
              <Text style={styles.specalOperaterText}>AC</Text>
            </View>
          </Pressable>

          <Pressable onPress={() => handlePress('()')}>
            <View style={styles.Operater}>
              <Text style={styles.OperaterText}>()</Text>
            </View>
          </Pressable>

          <Pressable onPress={() => handlePress('%')}>
            <View style={styles.Operater}>
              <Text style={styles.OperaterText}>%</Text>
            </View>
          </Pressable>

          <Pressable onPress={() => handlePress('/')}>
            <View style={styles.Operater}>
              <Text style={styles.OperaterText}>/</Text>
            </View>
          </Pressable>
        </View>
        {/* Row2 */}
        <View style={styles.keyPadRow}>
          <Pressable onPress={() => handlePress('7')}>
            <View style={styles.number}>
              <Text style={styles.numberText}>7</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress('8')}>
            <View style={styles.number}>
              <Text style={styles.numberText}>8</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress('9')}>
            <View style={styles.number}>
              <Text style={styles.numberText}>9</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress('*')}>
            <View style={styles.Operater}>
              <Text style={styles.OperaterText}>*</Text>
            </View>
          </Pressable>
        </View>
        {/* Row3 */}
        <View style={styles.keyPadRow}>
          <Pressable onPress={() => handlePress('4')}>
            <View style={styles.number}>
              <Text style={styles.numberText}>4</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress('5')}>
            <View style={styles.number}>
              <Text style={styles.numberText}>5</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress('6')}>
            <View style={styles.number}>
              <Text style={styles.numberText}>6</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress('-')}>
            <View style={styles.Operater}>
              <Text style={styles.OperaterText}>-</Text>
            </View>
          </Pressable>
        </View>
        {/* Row4 */}
        <View style={styles.keyPadRow}>
          <Pressable onPress={() => handlePress('1')}>
            <View style={styles.number}>
              <Text style={styles.numberText}>1</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress('2')}>
            <View style={styles.number}>
              <Text style={styles.numberText}>2</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress('3')}>
            <View style={styles.number}>
              <Text style={styles.numberText}>3</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress('+')}>
            <View style={styles.Operater}>
              <Text style={styles.OperaterText}>+</Text>
            </View>
          </Pressable>
        </View>
        {/* Row5 */}
        <View style={styles.keyPadRow}>
          <Pressable onPress={() => handlePress('0')}>
            <View style={styles.number}>
              <Text style={styles.numberText}>0</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress('.')}>
            <View style={styles.Operater}>
              <Text style={styles.OperaterText}>.</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress('back')}>
            <View style={styles.specalOperater}>
              <Text style={styles.specalOperaterText}>⬅</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress('=')}>
            <View style={styles.Operater}>
              <Text style={styles.OperaterText}>=</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  display: {
    elevation: 10,
    width: '95%',
    backgroundColor: 'white',
    borderRadius: 10,
    display: 'flex',
    padding: 10,
  },
  displayText: {
    color: 'black',
    fontSize: 50,
    textAlign: 'right',
  },
  keyPad: {
    width: '100%',
    height: '70%',
    display: 'flex',
  },
  keyPadRow: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
  },
  Operater: {
    width: 70,
    height: 70,
    backgroundColor: '#808080',
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  OperaterText: {
    backgroundColor: '#808080',
    color: '#ECF0F1',
    fontSize: 30,
    fontWeight: 'bold',
  },
  specalOperater: {
    width: 70,
    height: 70,
    backgroundColor: '#FF3800',
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  specalOperaterText: {
    backgroundColor: '#FF3800',
    color: '#ECF0F1',
    fontSize: 30,
    fontWeight: 'bold',
  },
  numberText: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: 30,
  },
  number: {
    width: 70,
    height: 70,
    backgroundColor: 'white',
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
});
