import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [nome, setNome] = useState("")
  const [curso, setCurso] = useState("")
  const [disciplina, setDisciplina] = useState("")
  const [descricao, setDescricao] = useState("")
  const [mostrarDados, setMostrarDados] = useState(false)

  const [nomeEnviado, setNomeEnviado] = useState("")
  const [cursoEnviado, setCursoEnviado] = useState("")
  const [disciplinaEnviada, setDisciplinaEnviada] = useState("")
  const [descricaoEnviada, setDescricaoEnviada] = useState("")

  useEffect(() => {
    console.log("Aplicativo iniciado!")
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>

        <View style={styles.avatarContainer}>
          <View style={styles.avatar}>
            <Text style={styles.avatarTexto}>👤</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.titulo}>Formulário de Cadastro</Text>

          <View style={styles.campoContainer}>
            <Text style={styles.rotulo}>📝 Nome</Text>
            <TextInput
              placeholder="Digite seu nome"
              style={styles.input}
              autoCapitalize="words"
              onChangeText={setNome}
            />
          </View>

          <View style={styles.campoContainer}>
            <Text style={styles.rotulo}>🎓 Curso</Text>
            <TextInput
              placeholder="Digite seu curso"
              style={styles.input}
              autoCapitalize="words"
              onChangeText={setCurso}
            />
          </View>

          <View style={styles.campoContainer}>
            <Text style={styles.rotulo}>📚 Disciplina</Text>
            <TextInput
              placeholder="Digite sua disciplina"
              style={styles.input}
              autoCapitalize="words"
              onChangeText={setDisciplina}
            />
          </View>

          <View style={styles.campoContainer}>
            <Text style={styles.rotulo}>✏️ Descrição</Text>
            <TextInput
              placeholder="Breve apresentação pessoal"
              style={styles.inputDescricao}
              autoCapitalize="sentences"
              multiline={true}
              numberOfLines={3}
              onChangeText={setDescricao}
            />
          </View>

          <Button
            title="Enviar"
            color="#5bbfb5"
            onPress={() => {
              setNomeEnviado(nome)
              setCursoEnviado(curso)
              setDisciplinaEnviada(disciplina)
              setDescricaoEnviada(descricao)
              setMostrarDados(true)
            }}
          />
        </View>

        {mostrarDados && (
          <View style={styles.dadosCard}>
            <Text style={styles.titulo}>Dados Enviados ✅</Text>
            <Text style={styles.dado}>📝 Nome: {nomeEnviado}</Text>
            <Text style={styles.dado}>🎓 Curso: {cursoEnviado}</Text>
            <Text style={styles.dado}>📚 Disciplina: {disciplinaEnviada}</Text>
            <Text style={styles.dado}>✏️ Descrição: {descricaoEnviada}</Text>
          </View>
        )}

      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0fafa',
  },
  scroll: {
    alignItems: 'center',
    padding: 20,
    gap: 16,
  },
  avatarContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#ffffff',
    borderWidth: 3,
    borderColor: '#5bbfb5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarTexto: {
    fontSize: 40,
  },
  card: {
    backgroundColor: '#ffffff',
    width: '100%',
    borderRadius: 16,
    padding: 20,
    gap: 14,
    shadowColor: '#5bbfb5',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2e9e94',
    marginBottom: 4,
  },
  campoContainer: {
    gap: 4,
  },
  rotulo: {
    fontSize: 15,
    color: '#444',
    fontWeight: '500',
  },
  input: {
    backgroundColor: '#e8f7f6',
    width: '100%',
    borderRadius: 10,
    padding: 10,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#b2e0dc',
  },
  inputDescricao: {
    backgroundColor: '#e8f7f6',
    width: '100%',
    borderRadius: 10,
    padding: 10,
    fontSize: 15,
    height: 80,
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: '#b2e0dc',
  },
  dadosCard: {
    backgroundColor: '#ffffff',
    width: '100%',
    borderRadius: 16,
    padding: 20,
    gap: 10,
    shadowColor: '#5bbfb5',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  dado: {
    fontSize: 16,
    color: '#333',
  },
});