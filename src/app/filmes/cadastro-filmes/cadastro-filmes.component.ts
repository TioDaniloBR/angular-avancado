import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { ValidarCamposService } from 'src/app/shared/components/campos/validar-campos.service';
import { Filme } from 'src/app/shared/models/filme';
import { FilmesService } from 'src/app/core/filmes.service';
import { AlertaComponent } from 'src/app/shared/components/alerta/alerta.component';
import { Alerta } from 'src/app/shared/models/alerta';


@Component({
  selector: 'dio-cadastro-filmes',
  templateUrl: './cadastro-filmes.component.html',
  styleUrls: ['./cadastro-filmes.component.scss']
})
export class CadastroFilmesComponent implements OnInit {

  id:number;
  cadastro: FormGroup;
  generos: Array<string>;

  constructor(public validacao: ValidarCamposService,
              public dialog: MatDialog,
              private fb: FormBuilder,
              private filmeService: FilmesService,
              private router: Router,
              private activatedRoute: ActivatedRoute
             ) { }

  get f() {
    return this.cadastro.controls;
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];

    if(this.id){
      this.filmeService.visualizar(this.id).subscribe( (filme: Filme) => this.criarFormulario(filme));
    }else{
      this.criarFormulario(this.criarFilmeEmBranco());
    }

    

    this.generos = ['Ação', 'Romance', 'Aventura', 'Terror', 'Ficção cientifica', 'Comédia', 'Drama'];

  }

  submit():void{
    this.cadastro.markAllAsTouched();
    if(this.cadastro.invalid) {
      return ;
    }
    const filme = this.cadastro.getRawValue() as Filme;
    this.salvar(filme);
  }

  reiniciarForm():void {
    this.cadastro.reset();
  }

  private criarFormulario(filme: Filme):void{
    this.cadastro = this.fb.group({
      titulo: [filme.titulo,[Validators.required, Validators.minLength(2),Validators.maxLength(256)]],
      urlFoto: [filme.urlFoto, [Validators.minLength(10)]],
      dtLancamento: [filme.dtLancamento, [Validators.required]],
      descricao: [filme.descricao],
      nota: [filme.nota,[Validators.required, Validators.min(0), Validators.max(10)]],
      urlIMDb: [filme.urlIMDb, [Validators.minLength(10)]],
      genero: [filme.genero, [Validators.required]]
    });
  }

  private criarFilmeEmBranco():Filme{
    return {
      id: null,
      titulo: null,
      urlFoto: null,
      dtLancamento: null,
      descricao: null,
      nota: null,
      urlIMDb: null,
      genero: null

    }as Filme;
  }

  private salvar(filme: Filme): void{
    this.filmeService.salvar(filme).subscribe( ()=> {
      const config = {
        data: {
          btnSucesso: "Ir para listagem",
          btnCancelar: "Cadastrar novo filme",
          corBtnSucesso: "secondary",
          corBtnCancelar: "primary",
          possuirBtnFechar: true
        } as Alerta
      };
      const dialogRef = this.dialog.open(AlertaComponent, config)
      dialogRef.afterClosed().subscribe( (opcao: boolean) => {
        if(opcao) {
          this.router.navigateByUrl('filmes');
        }else{
          this.reiniciarForm();
        }
      });
    },
    () => {
      const config = {
        data: {
          titulo: "Erro ao salvar registro.",
          btnSucesso: "Fechar",
          descricao: "Não foi possivel salvar o registro. Tente novamente mais tarde.",
          corBtnSucesso: "warn"
        } as Alerta
      };
      this.dialog.open(AlertaComponent, config);
    });
  }

}
