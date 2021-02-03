function Home() {
    const date = new Date();
    const dateString = adicionaZero(date.getDay()) + '/' + adicionaZero((date.getMonth() + 1)) + "/" + date.getFullYear();

    return (
        <div>
            <h1>Em construção | Under construction</h1>
            <p>{dateString}</p>
        </div>
    )
}

function adicionaZero(numero){
    if (numero <= 9) 
        return "0" + numero;
    else
        return numero; 
}

export default Home;