import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import Home from "./home";
import FormularioCadastroCliente from "./cadastrocliente";
import EditarCliente from "./editarcliente";
import ExcluirCliente from "./excluircliente";
import FormularioCadastroProduto from "./cadastroproduto";
import EditarProduto from "./editarproduto";
import ExcluirProduto from "./excluirproduto";
import FormularioCadastroConsumo from "./cadastroconsumo";
import Listagem from "./listagem";

type state = {
    tela: string
}

export default class Roteador extends Component<{}, state> {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Clientes'
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    render() {
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="purple lighten-4" botoes={['Home', 'Cadastrar cliente', 'Editar cliente', 'Excluir cliente', 'Cadastrar produto', 'Editar produto', 'Excluir produto', 'Cadastrar consumo', 'Listagens']} />
        if (this.state.tela === 'Home') {
            return (
                <>
                    {barraNavegacao}
                    <Home tema="purple lighten-4" />
                </>
            )
        } else if (this.state.tela === 'Cadastrar cliente') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroCliente tema="purple lighten-4" />
                </>
            )
        } else if (this.state.tela === 'Editar cliente') {
            return (
                <>
                    {barraNavegacao}
                    <EditarCliente tema="purple lighten-4" />
                </>
            )
        } else if (this.state.tela === 'Excluir cliente') {
            return (
                <>
                    {barraNavegacao}
                    <ExcluirCliente tema="purple lighten-4" />
                </>
            )
        } else if (this.state.tela === 'Cadastrar produto') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroProduto tema="purple lighten-4" />
                </>
            )
        } else if (this.state.tela === 'Editar produto') {
            return (
                <>
                    {barraNavegacao}
                    <EditarProduto tema="purple lighten-4" />
                </>
            )
        } else if (this.state.tela === 'Excluir produto') {
            return (
                <>
                    {barraNavegacao}
                    <ExcluirProduto tema="purple lighten-4" />
                </>
            )
        } else if (this.state.tela === 'Cadastrar consumo') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroConsumo tema="purple lighten-4" />
                </>
            )
        } else if (this.state.tela === 'Listagens') {
            return (
                <>
                    {barraNavegacao}
                    <Listagem tema="purple lighten-4" />
                </>
            )
        } else {
            return (
                <>
                    {barraNavegacao}
                    <Home tema="purple lighten-4" />
                </>
            )
        }

    }
}	