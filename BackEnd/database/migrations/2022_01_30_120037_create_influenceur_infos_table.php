<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInfluenceurInfosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('influenceur_infos', function (Blueprint $table) {
            $table->id();
            $table->string('nom');
            $table->string('prenom');
            $table->date('date_naissance');
            $table->string('telephone');
            $table->string('profession')->nullable();
            $table->enum('genre', ['Homme', 'Femme', 'Autre']);
            $table->enum('situation_familiale', ['Célibataire', 'Marié', 'Divorcé','Veuf']);
            $table->enum('niveau_etude', ['Niveau BAC', '(BAC) Baccalauréat', '(BAC +2) DEUG, BTS, DUT, TS','(BAC +3) Licence, Licence LMD,Licence Pro','(BAC +5) Master, Diplôme Ingénieur','(BAC +8) Doctorat']);
            $table->set('langue', ['Arabe', 'Francais', 'Anglais']);
            $table->string('instagram')->unique();
            $table->string('youtube')->nullable();
            $table->string('facebook')->nullable();
            $table->string('tiktok')->nullable();

            $table->unsignedBigInteger('adresse_id');
            $table->unsignedBigInteger('influenceur_id');
            $table->unsignedBigInteger('instagram_id');

            $table->foreign('adresse_id')->references('id')->on('quartiers');
            $table->foreign('influenceur_id')->references('id')->on('influenceurs')->onDelete('cascade');
            $table->foreign('instagram_id')->references('id')->on('instagram_infos')->onDelete('cascade');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('influenceur_infos');
    }
}
