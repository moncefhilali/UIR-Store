﻿using Infrastructure.Repositories;
using Domain.Interfaces;
using Microsoft.Extensions.DependencyInjection;
using Domain.Entities;

namespace Infrastructure
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddInfrastructure(this IServiceCollection services)
        {
            var assembly = typeof(DependencyInjection).Assembly;
            services.AddScoped<IGenericRepository<User>, UserRepository>();

            return services;
        }
    }
}
