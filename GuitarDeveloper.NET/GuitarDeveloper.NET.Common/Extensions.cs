using Newtonsoft.Json.Linq;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Reflection;

namespace GuitarDeveloper.NET.Common
{
    public static class Extensions
    {
        public static TValue GetAttributeValue<TAttribute, TValue>(this Type type, Func<TAttribute, TValue> valueSelector)
        where TAttribute : Attribute
        {
            if (type.GetCustomAttributes(typeof(TAttribute), true)
                .FirstOrDefault() is TAttribute attribute)
            {
                return valueSelector(attribute);
            }

            return default;
        }

        public static string GetDescription(this Enum value)
        {
            return value
                .GetType()
                .GetMember(value.ToString())
                .FirstOrDefault()?
                .GetCustomAttribute<DescriptionAttribute>()?
                .Description;
        }

        public static string GetName(this Enum value)
        {
            return value.ToString();
        }

        public static void ForEach<T>(this IEnumerable<T> source, Action<T> action)
        {
            if (source == null)
            {
                throw new ArgumentNullException(nameof(source));
            }

            if (action == null)
            {
                throw new ArgumentNullException(nameof(action));
            }

            foreach (T item in source)
            {
                action(item);
            }
        }

        public static void ForEach<T>(this ArrayList source, Action<T> action)
        {
            if (source == null)
            {
                throw new ArgumentNullException(nameof(source));
            }

            if (action == null)
            {
                throw new ArgumentNullException(nameof(action));
            }

            foreach (T item in source)
            {
                action(item);
            }
        }

        public static void ForEach<T>(this ICollection<T> source, Action<T> action)
        {
            if (source == null)
            {
                throw new ArgumentNullException(nameof(source));
            }

            if (action == null)
            {
                throw new ArgumentNullException(nameof(action));
            }

            foreach (T item in source)
            {
                action(item);
            }
        }

        public static bool IsNullOrEmpty(this JToken token)
        {
            return token == null
                || (token.Type == JTokenType.Array && !token.HasValues)
                || (token.Type == JTokenType.Object && !token.HasValues)
                || (token.Type == JTokenType.String && token.ToString() == string.Empty)
                || (token.Type == JTokenType.Null);
        }

        public static bool IsNullOrEmpty(this JObject jObject, string name)
        {
            if (jObject == null || !jObject.HasValues)
            {
                return true;
            }

            var token = jObject[name];
            if (token == null)
            {
                return true;
            }

            if (!token.HasValues)
            {
                return string.IsNullOrEmpty(token.Value<string>());
            }

            var valueFormatted = token["value"];

            return IsNullOrEmpty(valueFormatted ?? token);
        }

        public static string ToNaiveCamelCase(this string name)
        {
            return char.ToLowerInvariant(name[0]) + name.Substring(1);
        }
    }
}
