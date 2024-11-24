# Sobre o problema do Chalk - Leiam!

Nesta seção instalaremos um pacote chamado **chalk**.

Com a sua última atualização, **não podemos mais utilizá-lo com o `require`**.

A solução para resolver este problema de modo fácil é:

1. Desinstale localmente a versão atual do Chalk usando:
   ```bash
   npm uninstall chalk
   ```

2. Instale localmente a versão anterior à 5 usando:
   ```bash
   npm install chalk@4.1.2
   ```

**Ou**:

1. Instale o pacote diretamente na versão 4.1.2 com:
   ```bash
   npm install chalk@4.1.2
   ```