$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/EfetuarLogin.feature");
formatter.feature({
  "name": "Realizar login",
  "description": "",
  "keyword": "Funcionalidade"
});
formatter.scenarioOutline({
  "name": "Realizar login",
  "description": "",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "name": "aciono opção para me autenticar",
  "keyword": "Quando "
});
formatter.step({
  "name": "insiro os dados de \"\u003cemail\u003e\" e \"\u003csenha\u003e\"",
  "keyword": "E "
});
formatter.step({
  "name": "autenticacao sera realizada com sucesso",
  "keyword": "Entao "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Exemplos",
  "rows": [
    {
      "cells": [
        "email",
        "senha"
      ]
    },
    {
      "cells": [
        "drd.brusa93@gmail.com",
        "sxB7ix2722"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.step({
  "name": "que acesso o ecommerce",
  "keyword": "Dado "
});
formatter.match({
  "location": "CommonSteps.acessarEcommerce()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Realizar login",
  "description": "",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "name": "aciono opção para me autenticar",
  "keyword": "Quando "
});
formatter.match({
  "location": "LoginSteps.realizarLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "insiro os dados de \"drd.brusa93@gmail.com\" e \"sxB7ix2722\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.entrarLogin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "autenticacao sera realizada com sucesso",
  "keyword": "Entao "
});
formatter.match({
  "location": "LoginSteps.finalizarLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/EscolherProdutos.feature");
formatter.feature({
  "name": "Escolher produtos",
  "description": "",
  "keyword": "Funcionalidade"
});
formatter.scenarioOutline({
  "name": "Inserir Stylish Dress no carrinho",
  "description": "",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "name": "pesquiso o produto \"\u003cnome_produto\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "name": "coloco o produto no carrinho com a quantidade desejada \"\u003cquantidade\u003e\"",
  "keyword": "Entao "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Exemplos",
  "rows": [
    {
      "cells": [
        "nome_produto",
        "quantidade"
      ]
    },
    {
      "cells": [
        "Stylish Dress",
        "3"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Inserir Stylish Dress no carrinho",
  "description": "",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "name": "pesquiso o produto \"Stylish Dress\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "ProdutosSteps.pesquisarProduto(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "coloco o produto no carrinho com a quantidade desejada \"3\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "ProdutosSteps.adicionarProduto(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Inserir Beautiful Peacock Blue Cotton Linen Saree no carrinho",
  "description": "",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "name": "pesquiso o produto \"\u003cnome_produto\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "name": "coloco o produto no carrinho com a quantidade desejada \"\u003cquantidade\u003e\"",
  "keyword": "Entao "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Exemplos",
  "rows": [
    {
      "cells": [
        "nome_produto",
        "quantidade"
      ]
    },
    {
      "cells": [
        "Beautiful Peacock Blue Cotton Linen Saree",
        "2"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Inserir Beautiful Peacock Blue Cotton Linen Saree no carrinho",
  "description": "",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "name": "pesquiso o produto \"Beautiful Peacock Blue Cotton Linen Saree\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "ProdutosSteps.pesquisarProduto(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "coloco o produto no carrinho com a quantidade desejada \"2\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "ProdutosSteps.adicionarProduto(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Inserir Men Tshirt no carrinho",
  "description": "",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "name": "pesquiso o produto \"\u003cnome_produto\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "name": "coloco o produto no carrinho com a quantidade desejada \"\u003cquantidade\u003e\"",
  "keyword": "Então "
});
formatter.step({
  "name": "aciono a opção para ir ao carrinho finalizando a compra",
  "keyword": "E "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Exemplos",
  "rows": [
    {
      "cells": [
        "nome_produto",
        "quantidade"
      ]
    },
    {
      "cells": [
        "Men Tshirt",
        "1"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Inserir Men Tshirt no carrinho",
  "description": "",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "name": "pesquiso o produto \"Men Tshirt\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "ProdutosSteps.pesquisarProduto(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "coloco o produto no carrinho com a quantidade desejada \"1\"",
  "keyword": "Então "
});
formatter.match({
  "location": "ProdutosSteps.adicionarProduto(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "aciono a opção para ir ao carrinho finalizando a compra",
  "keyword": "E "
});
formatter.match({
  "location": "ProdutosSteps.visualizarCarrinho()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/ProcessarPagamento.feature");
formatter.feature({
  "name": "Finalizar compra e efetuar pagamento com cartão",
  "description": "",
  "keyword": "Funcionalidade"
});
formatter.scenarioOutline({
  "name": "Finalizar compra",
  "description": "",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "name": "inserido os dados de pagamento \"\u003cnome_cartao\u003e\" \"\u003cnumero\u003e\" \"\u003ccodigo\u003e\" \"\u003cmes\u003e\" \"\u003cano\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "name": "finalizo a compra com sucesso",
  "keyword": "Então "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Exemplos",
  "rows": [
    {
      "cells": [
        "nome_cartao",
        "numero",
        "codigo",
        "mes",
        "ano"
      ]
    },
    {
      "cells": [
        "Eduardo Brusamolin",
        "5118432675907813",
        "896",
        "12",
        "2024"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Finalizar compra",
  "description": "",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "name": "inserido os dados de pagamento \"Eduardo Brusamolin\" \"5118432675907813\" \"896\" \"12\" \"2024\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "PagamentoSteps.dadosPagamento(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "finalizo a compra com sucesso",
  "keyword": "Então "
});
formatter.match({
  "location": "PagamentoSteps.finalizarCompra()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom disconnected: unable to send message to renderer\n  (Session info: chrome\u003d114.0.5735.199)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SPWB005XM3\u0027, ip: \u0027192.168.1.7\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002718.0.1.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 114.0.5735.199, chrome: {chromedriverVersion: 114.0.5735.90 (386bc09e8f4f..., userDataDir: C:\\Users\\EBRUSA~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:51971}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 76f5cd1f1e557dd6388ce09524ab2141\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:483)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:104)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:577)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy19.click(Unknown Source)\r\n\tat pages.PagamentoPage.finalizarCompra(PagamentoPage.java:28)\r\n\tat steps.PagamentoSteps.finalizarCompra(PagamentoSteps.java:20)\r\n\tat ✽.finalizo a compra com sucesso(file:src/test/resources/features/ProcessarPagamento.feature:8)\r\n",
  "status": "failed"
});
});