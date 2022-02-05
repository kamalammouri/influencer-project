<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInstagramInfosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('instagram_infos', function (Blueprint $table) {

            $table->id();
            $table->string('username')->unique();
            $table->text('bio');
            $table->integer('followers');
            $table->integer('following');
            $table->string('full_name');
            $table->string('category_name');
            $table->text('profile_pic_url_proxy');
            $table->string('posts_count');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('instagram_infos');
    }
}
