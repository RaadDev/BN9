<!DOCTYPE html>
<html lang="en" class="{{ session('theme', 'light') }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'LENS5')</title>
    <link rel="stylesheet" href="{{ asset('css/styles.css') }}">
    <script src="{{ asset('js/theme.js') }}" defer></script>
</head>
<body>

    <div class="flex min-h-screen">
        <!-- Sidebar -->
        <aside class="w-64 bg-gray-100 dark:bg-gray-900 p-4 shadow">
            <div class="mb-6">
                <h1 class="text-2xl font-bold text-center text-gray-800 dark:text-white">LENS5</h1>
            </div>
            <nav class="flex flex-col gap-2 text-gray-700 dark:text-gray-200">
                <a href="{{ url('/') }}" class="hover:text-blue-500">🏠 Home</a>
                <a href="{{ url('/about') }}" class="hover:text-blue-500">ℹ️ About</a>
                <a href="{{ url('/services') }}" class="hover:text-blue-500">💼 Services</a>
                <a href="{{ url('/portfolio') }}" class="hover:text-blue-500">🖼️ Portfolio</a>
                <a href="{{ url('/portfolio-detail') }}" class="hover:text-blue-500">📂 Portfolio Detail</a>
                <a href="{{ url('/contact') }}" class="hover:text-blue-500">📞 Contact</a>
            </nav>
        </aside>

        <!-- Main Content -->
        <main class="flex-1 p-6 bg-white dark:bg-black text-gray-900 dark:text-gray-100">
            @yield('content')
        </main>
    </div>

</body>
</html>
