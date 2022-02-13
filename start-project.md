# Start React Native Project

## Whit Expo CLI

- [Setup Doc](https://reactnative.dev/docs/environment-setup)

```
# requiriments
# -> nodeJs
# -> npm
```


```
$ npm install -g expo-cli

$ expo init AwesomeProject

$ cd AwesomeProject

$ npm start # you can also use: expo start
```


## Expo limitations

Na [documentação do Expo (em inglês)](https://docs.expo.dev/introduction/why-not-expo/), podemos ver a lista de funcionalidades que o expo ainda não suporta. Um resumo dessas limitações são:

- As APIs de bluetooth, WebRTC e compras integradas com as lojas Play Store e App Store ainda não foram implementadas.
- Áudio tocando de fundo quando a aplicação está fechada com controle do sistema ainda não funciona.
- Aplicações que precisam ser extremamente pequenas requerem builds manuais mais complexos.
- Bibliotecas nativas proprietárias que não são muito utilizadas não estão disponíveis no Expo para evitar aumentar o tamanho do aplicativo.
- Serviços de notificações via push, com exceção do Expo notification service, podem necessitar de implementações manuais mais complexas.
- As SDKs mínimas suportadas são Android 5 e iOS 10.
- A versão gratuita pode gerar filas na hora do build para produção.
- O tamanho máximo de assets que podem ser atualizados via OTA é 50 MiB.
- Alterações nativas são necessárias para publicar apps que têm um público alvo menor de 13 anos.