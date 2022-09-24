# NODE-SHEET

![GitHub repo size](https://img.shields.io/github/repo-size/pedro3g/node-sheet?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/pedro3g/node-sheet?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/pedro3g/node-sheet?style=for-the-badge)
![Bitbucket open issues](https://img.shields.io/github/issues/pedro3g/node-sheet?style=for-the-badge)


> Uma opção simples baseada na biblioteca exceljs para criar planilhas.

### Alerta

O projeto ainda está em desenvolvimento e as próximas atualizações e não está apto a ser usado em projetos reais.

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:
* Você instalou a versão mais recente de `nodejs`

## 🚀 Instalando node-sheet

Para instalar o node-sheet, siga estas etapas:

* Clone o repositório
* Instale as depêndências usando `npm install`

## ☕ Usando node-sheet

Para usar node-sheet, siga estas etapas:

Crie uma arquivo `index.ts` na pasta `src`
```
import Workbook from './Workbook';
import Worksheet from './Worksheet';

void (async () => {
  // crie uma instância da planilha
  const workbook = new Workbook();

  // crie uma nova página
  const worksheet = new Worksheet('Título da página');

  // defina as colunas da sua planilha
  worksheet.setColumns([{ key: 'col-a' }, { key: 'col-b' }, { key: 'col-c' }]);

  // adicione uma nova linha
  worksheet.addRow(['Coluna A', 'Coluna B', 'Coluna C']);

  // adicione a nova página a planilha
  workbook.addWorksheet(worksheet);

  // exporte sua planilha
  await workbook.export('nome-da-planilha.xlsx');
})();

```

Execute utilizando o comando `npm run start:dev`

## 📫 Contribuindo para node-sheet
Para contribuir com node-sheet, siga estas etapas:

1. Bifurque este repositório.
2. Crie um branch: `git checkout -b <nome_branch>`.
3. Faça suas alterações e confirme-as: `git commit -m '<mensagem_commit>'`
4. Suba as suas alterações: `git push`
5. Crie a solicitação de pull.

Como alternativa, consulte a documentação do GitHub em [como criar uma solicitação pull](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## 🤝 Colaboradores

Agradecemos às seguintes pessoas que contribuíram para este projeto:

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/pedro3g">
        <img src="https://avatars3.githubusercontent.com/u/30221184" width="100px;" alt="Foto do Pedro Henrique no GitHub"/><br>
        <sub>
          <b>Pedro Henrique</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

[⬆ Voltar ao topo](#nome-do-projeto)<br>
