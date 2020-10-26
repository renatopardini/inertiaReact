<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PagesController extends Controller
{
    public function index()
    {
        return Inertia::render('Homepage', [
            'title_post'=>"Este é o primeiro post de teste",
            'title'=>"Home | inertiaReact",
        ])->withViewData([
            'title'=>"Home | inertiaReact",
            'description'=>"inertiaReact é um teste de React com Laravel atravez do Inertia JS.",
        ]);
    }

    public function contato()
    {
        return Inertia::render('Contato', [
            'title'=>"Contato | inertiaReact",
        ])->withViewData([
            'title'=>"Contato | inertiaReact",
            'description'=>"inertiaReact é um teste de React com Laravel atravez do Inertia JS.",
        ]);
    }
}
