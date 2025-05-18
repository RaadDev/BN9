<?php

use Illuminate\Support\Facades\Route;

Route::get('/', fn() => view('index'));
Route::get('/about', fn() => view('about'));
Route::get('/services', fn() => view('services'));
Route::get('/portfolio', fn() => view('portfolio'));
Route::get('/portfolio-detail', fn() => view('portfolio-detail'));
Route::get('/contact', fn() => view('contact'));

Route::get('/lang/{locale}', function ($locale) {
    if (!in_array($locale, ['en', 'ar'])) {
        abort(400);
    }

    session(['locale' => $locale]);
    app()->setLocale($locale);

    return redirect()->back();
})->name('lang.switch');
