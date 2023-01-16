<?php

class DataNascimento
{
    private string $data;
    public function __construct(string $data)
    {

        $formatacaoValida = $this->validaFormatacao($data);

        $dataSeparada = $this->separaDiaMesAno($data);

        $ano = $dataSeparada[0];
        $mes = $dataSeparada[1];
        $dia = $dataSeparada[2];

        $numerosValidos = $this->validaNumeros($dia, $mes, $ano);

        if ($formatacaoValida === false OR $numerosValidos === false){
            header("Location: index.php?erro=Data De Nascimento");
            die();
        }

        $this->data = $data;
    }

    private function separaDiaMesAno(string $data):array
    {
        return explode("-",$data);
    }
    private function validaFormatacao(string $data): bool
    {

        return preg_match("/^[0-9]{4}\-[0-9]{2}\-[0-9]{2}$/", $data);
    }

    private function validaNumeros(int $dia, int $mes, int $ano): bool
    {
        return checkdate($mes,$dia,$ano);
    }

    public function recuperaDataCompleta(): string
    {
        return $this->data;
    }
}